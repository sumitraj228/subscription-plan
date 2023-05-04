import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
 
  render() {
   
    return (
     
      <div className="maincontainer">
       <section>
          <div class="container py-5">
            
            <header class="text-center mb-5 text-white">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1>Task2 -Subscription Plan</h1>
                  
                </div>
              </div>
            </header>
           
            <div class="row text-center align-items-end">
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Free Plan</h1>
                  <h2 class="h1 font-weight-bold"> ₹0<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> post only 1 tweets a day</li>
                   
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Silver Plan</h1>
                  <h2 class="h1 font-weight-bold"> ₹100<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> post only 5 tweets a day</li>
                    
                  </ul>
                  <a href="https://rzp.io/i/3DLraSg0" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Gold Plan</h1>
                  <h2 class="h1 font-weight-bold"> ₹1000<span class="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> post unlimited tweets</li>

                  </ul>
                  <a href="https://rzp.io/i/EGSV1C5pu" class="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
     
      
)
};
}
export default Home;