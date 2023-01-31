import React, { useState } from 'react';
import {
  Button, Card,
  CardActionArea,
  CardMedia, TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import giphyService from '../services/giphy';
// import Modal from '../components/Modal';

const useStyles = makeStyles({
  Bluecoding: {
    textAlign: 'center',
  },
  previewCard: {
    marginTop: 15,
    marginLeft: '40%',
    width: 200,
  },
});

function Bluecoding() {
  const classes = useStyles();
  const [giphySearch, setGiphySearch] = useState('');
  const [gifsQuantity] = useState(5);
  const [gifs, setGifs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    giphyService.searchGifs(giphySearch, gifsQuantity).then((response) => {
      setGifs(response.data);
    });
  };

  const openGifModal = () => {
    console.log('test modal');
  };

  return (
    <div className={classes.Bluecoding}>
      <form onSubmit={handleSubmit}>
        <div id="searchRow">
          <p>Giphy Test</p>
          <TextField id="standard-search" label="Search field" type="search" onChange={(e) => setGiphySearch(e.target.value)} />
          <Button type="submit" variant="contained" color="primary" className="SearchButton">Search</Button>
        </div>
        <div id="gifsList">
          {gifs.map((gif) => (
            <div key={gif.id}>
              <Card key={gif.id} className={classes.previewCard} onClick={openGifModal}>
                <CardActionArea key={gif.id}>
                  <CardMedia
                    key={gif.id}
                    autoPlay
                    alt={gif.title}
                    component="video"
                    image={gif.images.preview.mp4}
                    title={gif.title}
                    height={140}
                    width={300}
                  />
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Bluecoding;
