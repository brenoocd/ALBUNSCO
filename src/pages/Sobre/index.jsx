import styles from './Sobre.module.css'
import Container from '../../components/Container';
import React, { useState, useEffect } from 'react';

function Rock() {
    const [rock, setRock] = useState([]);

    useEffect(() => {
        const buscarRock = async () => {
            try {
                // Substitua pela URL correta da sua API ou importe o JSON diretamente
                const response = await fetch('rock.json');
                const data = await response.json();
                setRock(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        buscarRock();
    }, []);
    
    return (
        <Container>
            <section className={styles.rock}>
                <div>
                    <h1>Top 5 álbuns favoritos Rock internacional</h1>
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
                            {rock.map((rock, index) => (
                                <tr key={index}>
                                    <td>{rock.id}</td>
                                    <td>{rock.titulo}</td>
                                    <td>{rock.artista}</td>
                                    <td>{rock.genero}</td>
                                    <td><img src={rock.capa} alt={rock.nome} className={styles.capaRock} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </Container>
    );
}

export default Rock;