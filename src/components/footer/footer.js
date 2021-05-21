import React from 'react';

class footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-2">
                            <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
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
                        <div>
                            <a href="#" class="btn btn-default btn-lg">
                                <span class="glyphicon glyphicon-search"></span> Search
                            </a>
                        </div>
                    </form>
                    </section>
                </div>
                <div className="text-center p-3" >
                    © 2020 Copyright:
                    <a className="text-white" href="">AF Project</a>
                </div>
                </footer>
            </div>
        
        )
    }
}
export default footer;