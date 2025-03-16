import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Maths from './Maths'
import Science from './Science'
import Gk from './Gk'
export default function Home() {
  let username = localStorage.getItem('username') || prompt('please enter your name')
  localStorage.setItem('username',username)

  function login(){
    username = prompt('please enter your name')
    while(!username){
      username = prompt('please enter your name')
    }
    localStorage.setItem('username',username);
    window.location.reload();
  }

  function logout(){
    localStorage.setItem('username','guest');
    window.location.reload();
  }

  useEffect(function(){
    let cards = document.querySelectorAll(".card");
    for(let card of cards){
        card.addEventListener('mouseover',function(){
        card.querySelector('img').classList.add('blur');
        card.querySelector('div').classList.remove('collapse');
        card.querySelector('div').classList.add('card-img-overlay');
      })

    card.addEventListener('mouseout',function(){
      card.querySelector('img').classList.remove('blur');
      card.querySelector('div').classList.remove('card-img-overlay');
      card.querySelector('div').classList.add('collapse');
    })
    }
  })
  return (
    <div>
      <div className='text-light d-flex justify-content-between align-items-center p-3 bg-opacity-75 bg-dark'>
        <h1>Welcome {username}</h1>
        {username==='guest' || !username? <button className='btn btn-success p-2' onClick={login}>Login</button>:<button className='btn btn-danger p-2' onClick={logout}>Log out</button>}
      </div>
      <div className="container-fluid p-5">
        <div className="row">
            <div className="col-sm-4 p-3">
              <div className="card">
                <img className="card-img-top" src="https://play-lh.googleusercontent.com/vMq6_OouGHPzSt697sd-W9jjTP5l8rscPfYakniVAM0hPVVdtBZrjVO0xgXY1oHCuXs=w526-h296-rw" alt="" />
                <div className='card-img-overlay collapse'>
                  <h4>General knowledge quiz</h4>
                  <p>test your general knowledge with this quiz</p>
                  <Link to="gk" className='p-2 btn btn-primary'>Start quiz</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="card">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqtqrNAs9BZvBebE3dG4bZ-PYXE8ucQ_5SDs3ue4xqfRhNKiLoIpAj8ZLW14H7HWelnc&usqp=CAU" alt="" />
                <div className='card-img-overlay collapse'>
                  <h4>General knowledge quiz</h4>
                  <p>test your Mathamatic knowledge with this quiz</p>
                  <Link to="maths" className='p-2 btn btn-success'>Start quiz</Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4 p-3">
              <div className="card">
                <img className="card-img-top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0osegUA6wsP_EVwsPEAWrxVBxGi51qrk8-BfaJvsZLCJVin9J7_txfkt40iTLpj0moFEGFVXfJ6Uv3EjZVU-PxDUE4KPX2BQ38nAl7bwWs7KoIWt5iue1FViXRvmBRilHhqWnrpfCiKN5RJMeopyB2JQt9jKQa7dmGRF6omj2smUnJnRngpvrHyFRGkc/w1200-h630-p-k-no-nu/QUIZ.jpg" alt="" />
                <div className='card-img-overlay collapse'>
                  <h4>General knowledge quiz</h4>
                  <p>test your sceintific knowledge with this quiz</p>
                  <Link to="science" className='p-2 btn btn-danger'>Start quiz</Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
  }