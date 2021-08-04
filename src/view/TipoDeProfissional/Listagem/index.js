import React, { useRef, useState } from 'react';
import "./style.css";
import Nav from '../../../components/Nav';

import formatQuery from '../../../utils/formatQuery';

const Listagem = () => {

    //hooks

    const [tipos, setTipos] = useState([]);

    //refs
    const descricao = useRef();
    const situacao = useRef();

    /*fecth data of search in API*/
    const fetchData = () => {
        const dataToSearch = {
            descricao: descricao.current.value,
            situacao: situacao.current.value
        };

        /*format query string*/
        const query = formatQuery(dataToSearch);

        fetch("http://localhost:8090/tipoDeProfissional?" + query, dataToSearch).then(result => result.json()).then((result => {
            if (result.error) {
                setTipos([]);
                alert(result.error);
            }
            else {
                /*fill content table*/
                setTipos(result);
            }
        }));
    };

    return (
        <>
            <Nav />
            <section className="containerListagem">
                    <div className="form-group col-sm-3">
                        <div className="col-form">
                            <label>Descrição</label>
                            <input ref={descricao} className="form-control" type="text" />
                        </div>
                    </div>

                    <div className="form-group col-sm-2">
                        <div className="col-form">
                            <label>Situação</label>
                            <select ref={situacao} className="form-select">
                                <option value="1">Ativo</option>
                                <option value="0">Inativo</option>
                            </select>
                        </div>
                    </div>
                <div className="col-form">
                    <button className="btn btn-primary" onClick={fetchData}>Pesquisar</button>
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Situação</th>
                            <th scope="col">Data de cadastro</th>
                            <th scope="col">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipos.map((item, index) => (
                            <tr key={new Date() * Math.random()}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.descricao}</td>
                                <td>{item.situacao ? "Ativo" : "Inativo"}</td>
                                <td>{item.createdAt}</td>
                                <td><a target="_blank" href={'/cadastro/tipoDeProfissional?id='+item.id}>X</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default Listagem;