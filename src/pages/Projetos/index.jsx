import { useEffect, useState } from 'react'
import styles from './Projeto.module.css'

function Projetos() {
    const [eletros, setEletros] = useState([]);

    useEffect(() => {
        const buscarEletros = async () => {
            try {
                const response = await fetch('eletros.json');
                const data = await response.json();
                setEletros(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        buscarEletros();
    }, []);

    return (
        <section className={styles.eletros}>
        <div>
            <h1>Top 5 álbuns favoritos de Eletrônica/House</h1>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                                <th>Título</th>
                                <th>Artista</th>
                                <th>Gênero</th>
                                <th>Capa</th>
                    </tr>
                </thead>
                <tbody>
                    {eletros.map((eletro, index) => (
                        <tr key={index}>
                            <td>{eletro.id}</td>
                            <td>{eletro.titulo}</td>
                            <td>{eletro.artista}</td>
                            <td>{eletro.genero}</td>
                            <td><img src={eletro.capa} alt={eletro.nome} className={styles.capaEletro} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
    )
}

export default Projetos
