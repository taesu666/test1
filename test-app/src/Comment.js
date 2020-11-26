import React from 'react';

const styles = {
  root: {
    width: '20%',
    margin: 'auto',
    maringTop: 16,
    paddinf: 16,
    textAlign: 'left',
    backgroundColor: 'white',
    borderRadius: 16,
  },
  imageContainer: {
    display: 'inline-block',
    width: '50',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentContainer: {
    display: 'inline-block',
    marginLeft: 16,
    textAlign: 'left',
    verticalAlign: 'top',
  },
  nextText:{
    color:'black',
    fontSize:20,
    fontWeight: '700',

  },
  contentText:{
    color: 'black',
    forntSize:16,
  }
}

class Comment extends React.Component{
  render() {
    const {name, content} = this.props
    return(
      <div style = {styles.root}>
        <div style = {styles.imageContainer}>
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXx8PCqqqn08/Onp6bPz87b2tqtrazV1NTu7e3CwsHk4+O9vLzr6uq1tLSysrGkpKPIx8cLrEzWAAAFDElEQVR4nO2dC5aEKAxFJYgofve/2pGyZ7p6bEuFpwQ7dwXewychIBSFIAiCIAiCIAiCIAiCIAiCIAiCIOQHfZP6U/DMUp0z1pYea43rHqU5y5ip7YdKKe1Rqhr6djIPkaSis+3i9Y1eXFvbFblLUmGm4YfcD1E9TCZrx7l3ttWm3yJZtSbfzlq7Yfzs93IcB1en/tQgyE27dv8yuQybkcz2+Fu342ByU6SuOe73cmy6rBzJ9ecEZ8U+p54aIJiXIll1XtCnATYTRTIhfi/HPOYbMlWg4Jyv5qBILlxwVsxgLHYnwuAaPXSpBXY5GQdXik1qgT3KOMFZsUyt8JG4QbjAeyhSQKRfNWLP2JCi++hLseSr6AaAoFKDSy2yCaQJOU82gGlmoWLaiDRhmnBuxInnSCRUE86NyNIwfEmxhucig1qgYcvREBQqFjgGjHlhj4Tjch82k3r0lFpnTdcCBZVq+a0THVRQKXYDERkrPPziBWZZ8WbIboGBjIYvQ3YRkXqooFLs1sHApHSBXWpKYEGl2Blih+E8ENkZjmDDUQzv5g8YPn8cPt8QLMgwWjw/4j8/a8MugOclMDvDyJ3R/6MbdobQMg3HsvcfWAE/vopROLAhu0oUbmttgeEGW4cNiD2/emkNLUXpluHB6MdX9bHhgl+wiDuSuIblIcXH7x8WNXIy7RlONNDcm1/e7SELNOS4BTzHfFy5beQX7z2PP08DHIg8hyFyAcVw6bTQoSIi2+PsNaib6oZjNPTADg3xjBWe558RLiBrRN2m1tgGk9YwTWgWMPszjAUhQZ9ruP8CUFNkWEd8Jz4k8g2GC4CQyHme8USXTRkWSn8SGzBYh4ov4laJVerP3yeubsqxTroiaiSyH4UvYqZTm/rjDxFROGVZJl1DwYmNZv0L8BuhZ775ne3eJHA/mOG+7yZlkCHbn2N/oQvop5rhj0DbkDtf4R9zmWYWzmc2WWQz75w9uMDyaMJnTlYWOVcQN6Bzv+vlNQgX6EzIyG0QfnH4hA3H0zPHOHpumHGRe4fHGx5eC+ex7v2FwwEjw1DxgsxBQaW47mrv8fi59ERWk2c3PZN8Z5d2v6gP+3myy7vPLi4yXFqcLmTkVMLwBOyyZbAl804ZUMXIqRXr43eVvzPlMhYpcG9Gz/lpDj2VulIHV/V1mYGjiToXpVuTWuAz5Jqd1x52FauGb8mGatcceO1h13FsXM1RkmrTBF3F/oujagw7R6Jy7zWSU45VW3J6ucR3T1DzvUkqNp2VnG2C48NHR93Y9LMOkZsGePv956iGyaXsrXPvtEfeyomSHAebqrf6yRM4uXyQrJJMrVSU/S1+i2Nf3vvwlZ88L5lcPkjqG6dW3z1v9vtyvKezEpn+sslzx1H1179gRrWNeqEjWnKwF7ejAV9DE+DYXLi+ouKe8LCjWDVXzau1ZeDn0ZW9oqJDXZPa7I0LXmkjB75kNg7donPywIfGrgP+hNnxzc77QM6p2Fs9UABvBzmxXX0vMMWOYwt6KtQZjuR5zBaoJ8ywzzpggfyfAb7ECwvirBHyUhY8iF/d4FevYgHcghJwJv1OxuiTOOhbO9HE3wIKvd/qCqJ/BoPeUXYFsQfG5oyUdy+Nzk7BrzhdQWS8QF+eiyf20J8YpkcMxVAM0yOGYvgHDLkWEr+JLSlSqTRnAP9mkik5gygKE2/iBQVBEARBEARBEARBEARBEARBEAThIP8A0GJP8jbLA8MAAAAASUVORK5CYII='
            style={styles.image}/>
        </div>
        <div style= {styles.commentContainer}>
          <div style={styles.nextText}>
            {name}

          </div>
          <span style= {styles.contentText}>
            {content}
          </span>
        </div>
       
      </div>
    )

  }
}

export default Comment;