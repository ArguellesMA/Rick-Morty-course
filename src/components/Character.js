
export default function Character(props) {
    const { characteres, setcharacters } = props;
 
    const resetCharacter = () => {
        setcharacters(null);
    }

    return (
    <div className="characteres">

        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacter}>Volver a la home</span>

        <div className="container-characters">
            {characteres.map((character, index) => (
                <div className="character-container" key={index}>
                   <div>
                       <img src={character.image} alt={character.name} />
                   </div>

                   <div>
                       <h3>
                           {character.name}
                       </h3>
                       <h6>
                           {character.status === "Alive" ? (
                               <>
                               <span className="alive" />
                               Alive
                               </>
                           ) : (
                               <>
                               <span className="dead" />
                               Dead
                               </>
                           )}
                       </h6>
                       <p>
                           <span className="text-grey" >Episodios: </span>
                           <span>{character.episode.length}</span>
                        </p>
                        <p>
                           <span className="text-grey" >Especie: </span>
                           <span>{character.species}</span>
                        </p>
                   </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacter}> Volver a la home</span>
    </div>
    )
}