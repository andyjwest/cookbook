import React, {useEffect, useState} from 'react'
import InfoIcon from '@material-ui/icons/Info';
import {Container, GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    gridList: {
        width: 800,
        height: 600,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function RecipeList() {
    const classes = useStyles();
    const [search, setSearch] = useState()
    const [allRecipes, setAllRecipes] = useState([])

    useEffect(() => {

        let url = new URL(`${process.env.REACT_APP_API_URL}/recipes`)
        search && url.searchParams.append('search', search);

        fetch(url.href)
            .then(r => r.json())
            .then((result => {
                setAllRecipes(result)
            }), error => {
                console.log(error)
            })
    }, [search])

    return <Container>
        <GridList cols={3} className={classes.gridList}>
            {allRecipes.map(recipe => (
                <GridListTile key={recipe.id} >
                    <Link to={`/recipes/${recipe.id}`}>
                    <img src={recipe.titleImage} alt={recipe.title} style={{width: "100%", height: "100%"}}/>
                    </Link>
                    <GridListTileBar
                        title={recipe.title}
                        // subtitle={<span>by: {tile.author}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${recipe.title}`} onClick={()=> {}}>
                                <InfoIcon/>
                            </IconButton>
                        }
                    />
                </GridListTile>
            ))}
        </GridList>
    </Container>
}
