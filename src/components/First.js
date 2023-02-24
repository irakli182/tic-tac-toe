import React from 'react'
import './first.css'
import fill from './fill'

function First() {



    const refresh = () => {
        window.location.reload()
    }

    



  return (
    <div className='head'>

        <p className='status'>Impossible to beat tic tac toe game</p>
        <p id='status'>...playing...</p>
        
        <div className='container'>
            <div className='gamediv'>
                <div id='group1' className='group'>
                    <p onClick={fill} id='box1' type="text"></p>
                    <p onClick={fill} id='box2' type="text"></p>
                    <p onClick={fill} id='box3' type="text"></p>
                </div>
                <div id='group2' className='group'>
                    <p onClick={fill} id='box4' type="text"></p>
                    <p onClick={fill} id='box5' type="text"></p>
                    <p onClick={fill} id='box6' type="text"></p>
                </div>
                <div id='group3' className='group'>
                    <p onClick={fill} id='box7' type="text"></p>
                    <p onClick={fill} id='box8' type="text"></p>
                    <p onClick={fill} id='box9' type="text"></p>
                </div> 
            </div>
        </div>

        <div className='butdiv'>
            <button id='refresh' onClick={refresh} >restart</button>
        </div>

        <div className='finishdiv' >
            <p className='credit'>Please, if you find any buggs contact <a className='credita' href='https://www.facebook.com/irakli.berikashvili.581'>me</a></p>
            <p className='credit'>credit: <a className='credita' target="_blank" href='https://portfolio-irakli182.vercel.app/'>irakli berikashvili</a></p>
            <p className='credit'>source code:</p>
        </div>

    </div>
  )
}

export default First


