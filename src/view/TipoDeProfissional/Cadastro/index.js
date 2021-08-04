import React, { useRef, useEffect } from 'react';
import "./style.css";
import Nav from '../../../components/Nav';
import { host } from '../../../config/constants';

import {
    useLocation
} from "react-router-dom";

const Cadastro = () => {

    //refs
    const descricao = useRef();
    const situacao = useRef();

    /*provide access to query string object*/
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const id = useQuery().get("id");

    /**
     * Fetch data from api / professional types
     */
    const fetchData = () => {

        fetch(host + "/tipoDeProfissional/" + id).then(result => result.json())
            .then(result => {
                if (result.error) {
                    alert(result.error);
                    return;
                }
                /*fill fields*/
                descricao.current.value = result.descricao;
                situacao.current.value = result.situacao ? 1 : 0;
            });
    }

    /**
     * Send data to save in API
     */
    const saveData = () => {

        const dataToSave = {
            descricao: descricao.current.value,
            situacao: situacao.current.value
        };

        /*check if is edition or creation mode*/
        const idToSend = (id == null || id == "") ? "" : "/" + id;
        const method = (id == null || id == "") ? "POST" : "PUT";

        /*send to API*/
        fetch(host + "/tipoDeProfissional" + idToSend, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSave)
        }).then(result => result.json()).then(result => {

            const msg = result.success || result.error;
            alert(msg);
        });
    }

    /**
     * Delete professional type register
     */
    const deleteData = () => {
        fetch(host + "/tipoDeProfissional/" + id, {
            method: "DELETE"
        }).then(result => result.json()).then(result => {

            const msg = result.success || result.error;
            alert(msg);
        });
    };

    /*perform default actions on load*/
    useEffect(fetchData, [0]);

    return (
        <>
            <Nav />
            <section className="containerCadastro col-sm-6">
                <div className="form-group col-sm-4">
                    <div className="col-form">
                        <label>Descrição</label>
                        <input ref={descricao} className="form-control" type="text" />
                    </div>
                </div>

                <div className="form-group col-sm-6">
                    <div className="col-form">
                        <label>Situação</label>
                        <select ref={situacao} className="form-select">
                            <option value="1">Ativo</option>
                            <option value="0">Inativo</option>
                        </select>
                    </div>
                </div>
                <div className="col-form">
                    <button className="btn btn-primary" onClick={saveData}>Salvar</button>
                    {id !== null && id !== "" ? <button className="btn btn-danger" style={{ marginTop: '20px' }} onClick={deleteData}>Deletar</button> : ""}
                </div>
            </section>
        </>
    );
};

export default Cadastro;