import React, { useEffect, useState } from 'react';
import Container from '../../components/Container';
import styles from'./Home.module.css';

function Home() {
    const [rapz, setRapz] = useState([]);

    useEffect(() => {
        const albunsrap = async () => {
            try {
                // Substitua pela URL correta da sua API
                const response = await fetch('rap.json');
                const data = await response.json();
                setRapz(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        albunsrap();

    }, []);

    return (
        <Container>
            <section className={styles.home}>
                <div>
                    <h1>Top 5 álbuns favoritos de rap/trap internacional</h1>
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
                            {rapz.map((rap, index) => (
                                <tr key={index}>
                                    <td>{rap.id}</td>
                                    <td>{rap.titulo}</td>
                                    <td>{rap.artista}</td>
                                    <td>{rap.genero}</td>
                                    <td><img src={rap.capa} alt={rap.nome} className={styles.capaRap} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Container>
    );
}

export default Home;