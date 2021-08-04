import React, { useRef, useState, useEffect } from 'react';
import "./style.css";
import Nav from '../../../components/Nav';
import { host } from '../../../config/constants';
import formatQuery from '../../../utils/formatQuery';

const Listagem = () => {

    //hooks

    const [profissionais, setProfissionais] = useState([]);
    const [tipos, setTipos] = useState([]);

    //refs
    const nome = useRef();
    const telefone = useRef();
    const email = useRef();
    const tipo = useRef();
    const situacao = useRef();

    /**
     * Fetch data from api / profissional
     */
    const fetchData = () => {

        /*get all data of fields*/
        const dataToSearch = {
            nome: nome.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
            tipoDeProfissional: tipo.current.value,
            situacao: situacao.current.value
        };

        const query = formatQuery(dataToSearch);


        fetch(host + "/profissional?" + query, dataToSearch).then(result => result.json()).then((result => {
            if (result.error) {
                setProfissionais([]);
                alert(result.error);
            }
            else {
                /*fill content of table*/
                setProfissionais(result);
            }
        }));
    };

    /**
     * get all professional types
     */
    const fetchTipoDeProfissional = () => {
        const dataToSearch = {
            descricao: '',
            situacao: 1
        };

        /*format query string*/
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

    useEffect(fetchTipoDeProfissional, [0]);

    return (
        <>
            <Nav />
            <section className="containerListagem">
                <form id="formSave">
                    <div className="form-group col-sm-3">
                        <div className="col-form">
                            <label>Nome</label>
                            <input ref={nome} className="form-control" type="text" />
                        </div>
                    </div>

                    <div className="form-group col-sm-2">
                        <div className="col-form">
                            <label>Telefone</label>
                            <input ref={telefone} className="form-control" type="text" />
                        </div>
                    </div>

                    <div className="form-group col-sm-3">
                        <div className="col-form">
                            <label>Email</label>
                            <input ref={email} className="form-control" type="email" />
                        </div>
                    </div>
                    <div className="form-group col-sm-2">
                        <div className="col-form">
                            <label>Tipo de profissional</label>
                            <select ref={tipo} className="form-select">
                                <option value="">Selecione</option>
                                {tipos.map((item) => (
                                    <option key={item.id} value={item.id}>{item.descricao}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group col-sm-2">
                        <div className="col-form">
                            <label>Situação</label>
                            <select ref={situacao} className="form-select">
                                <option value="">Selecione</option>
                                <option value="1">Ativo</option>
                                <option value="0">Inativo</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="col-form">
                    <button className="btn btn-primary" onClick={fetchData}>Pesquisar</button>
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Data de cadastro</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profissionais.map((item, index) => (
                            <tr key={new Date() * Math.random()}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nome}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                                <td>{item.situacao ? "Ativo" : "Inativo"}</td>
                                <td>{item.createdAt}</td>
                                <td><a target="_blank" href={'/cadastro/profissional?id=' + item.id}>X</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default Listagem;