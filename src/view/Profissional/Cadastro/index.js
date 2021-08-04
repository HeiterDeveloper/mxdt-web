import React, { useState, useRef, useEffect } from 'react';
import "./style.css";
import Nav from '../../../components/Nav';
import { host } from '../../../config/constants';
import formatQuery from '../../../utils/formatQuery';

import {
    useLocation
} from "react-router-dom";

const Cadastro = () => {

    //hooks

    const [tipos, setTipos] = useState([]);

    //refs
    const nome = useRef();
    const telefone = useRef();
    const email = useRef();
    const tipo = useRef();
    const situacao = useRef();

    /*provide access to query string object*/
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const id = useQuery().get("id");

    /**
     * Fetch data from api / profissional
     */
    const fetchData = () => {

        if (id == null) {
            return;
        }

        fetch(host + "/profissional/" + id).then(result => result.json())
            .then(result => {
                if (result.error) {
                    alert(result.error);
                    return;
                }
                /*fill screen fields*/
                nome.current.value = result.nome;
                telefone.current.value = result.telefone;
                email.current.value = result.email;
                tipo.current.value = result.tipoDeProfissional;
                situacao.current.value = result.situacao ? 1 : 0;
            });
    }

    /**
     * Send data to save in API
     */
    const saveData = () => {

        /*get all data of fields*/
        const dataToSave = {
            nome: nome.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
            tipoDeProfissional: tipo.current.value,
            situacao: situacao.current.value
        };

        /*check if is edition or creation mode*/
        const idToSend = (id == null || id == "") ? "" : "/" + id;
        const method = (id == null || id == "") ? "POST" : "PUT";

        /*send to API*/
        fetch(host + "/profissional" + idToSend, {
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
     * Delete professional register
     */
    const deleteData = () => {
        fetch(host + "/profissional/" + id, {
            method: "DELETE"
        }).then(result => result.json()).then(result => {

            const msg = result.success || result.error;
            alert(msg);
        });
    };

    /**
     * Get all professional types
     */
    const fetchTipoDeProfissional = () => {
        const dataToSearch = {
            descricao: '',
            situacao: 1
        };

        const query = formatQuery(dataToSearch);

        fetch(host + "/tipoDeProfissional?" + query, dataToSearch).then(result => result.json()).then((result => {
            if (result.error) {
                setTipos([]);
                alert(result.error);
            }
            else {
                /*fill options*/
                setTipos(result);
            }
        }));
    };

    useEffect(() => {

        /*perform default actions on load*/
        fetchTipoDeProfissional();
        fetchData();
    }, [0]);

    return (
        <>
            <Nav />
            <section className="containerCadastro col-sm-6">
                <div className="form-group col-sm-4">
                    <div className="col-form">
                        <label>Nome</label>
                        <input ref={nome} className="form-control" type="text" />
                    </div>
                </div>

                <div className="form-group col-sm-4">
                    <div className="col-form">
                        <label>Telefone</label>
                        <input ref={telefone} className="form-control" type="text" />
                    </div>
                </div>

                <div className="form-group col-sm-4">
                    <div className="col-form">
                        <label>Email</label>
                        <input ref={email} className="form-control" type="email" />
                    </div>
                </div>
                <div className="form-group col-sm-6">
                    <div className="col-form">
                        <label>Tipo de profissional</label>
                        <select ref={tipo} className="form-select">
                            <option value="0">Selecione</option>
                            {tipos.map((item) => (
                                <option key={item.id} value={item.id}>{item.descricao}</option>
                            ))}
                        </select>
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