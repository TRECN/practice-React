
        <>
          <Hero text={movieDetails.original_title} backdropPath={backdropPath}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img src={imgPath} alt="" className="img-fluid rounded" />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderDetail()
};



export default MovieView;
