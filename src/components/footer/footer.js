import React from 'react';
import './footer.scss';

class Footer extends React.Component{
    constructor(props) {
        super(props);
      }
    
    render(){
        return(
            <div className="footer-bg footer-content">
                <footer className=" text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                <div className="input-group rounded">
                                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <span className="input-group-text border-0" id="search-addon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <br></br> <br></br> <br></br> <br></br> <br></br>
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                <input type="email" id="form5Example2" className="form-control" />
                                <label className="form-label" for="form5Example2">Email address</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light mb-4">
                                Subscribe
                                </button>
                            </div>
                            </div>
                        </form>
                        </section>
                    </div>
                    <div className="text-center p-3" >
                        © 2021 Copyright:
                        <a class="text-white" href="">AF Project</a>
                    </div>
                </footer>
            </div>
        
        )
    }
}
export default Footer;