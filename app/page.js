'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { database } from "@/app/firebaseConfig";
import { child, get, ref } from "firebase/database";

import profile from "@/public/profile.jpg";
import sharma from "@/public/sharma1.jpeg";
import nama from "@/public/nama.jpeg";
import amol from "@/public/amol.jpeg";

export default function Home() {

  const [sensors, setSensors] = useState([]);

  try {
    useEffect(() => {
      // const sensorsRef = ref(database, 'sensors');
      get(child(ref(database), "sensors")).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSensors(data);
          console.log(snapshot.val());

          // console.log(sensorArray);
          // setSensors(sensorArray);
        } else {
          console.log("No data found");
        }
      })
    }, [])
  } catch (error) {
    console.error(error);
  }

  return (
       <>
      {/* Navbar */}
      <div  className="navbar bg-base-100  sticky top-0 z-10 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home">Home</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </div>
        <div  className="navbar-center">
          <a className="btn btn-ghost text-5xl font-roboto font-extrabold " href="#home">AquaSense</a>
        </div>
        <div className="navbar-end">
          {/* Theme */}
          {/* <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="light" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua" /></li>
            </ul>
          </div> */}
          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Hero  */}
      {/* sensor-temp-C */}
      <div id="home" className=" flex flex-row flex-wrap justify-center ml-4 ">
        <div className="card w-96 bg-base-100 shadow-xl m-auto mt-10 mb-10 pt-4">
          <div className="radial-progress m-auto" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Celsius</h2>
          </div>
        </div>
        {/* sensor-temp-F */}
        <div className="card  w-96 bg-base-100 shadow-xl m-auto mt-10 mb-10 pt-4">
          <div className="radial-progress m-auto" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fahrenheit</h2>
          </div>
        </div>
        {/* sensor-tds */}
        <div className="card  w-96 bg-base-100 shadow-xl m-auto mt-10 mb-10 pt-4">
          <div className="radial-progress m-auto" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TDS</h2>
          </div>
        </div>
        {/* sensor-EC */}
        <div className="card  w-96 bg-base-100 shadow-xl m-auto mt-10 mb-10 pt-4">
          <div className="radial-progress m-auto" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">EC</h2>
          </div>
        </div>
      </div>

      {/* Description */}
      <div id="project" className=" rounded border-amber-50 bg-gray-300  w-full m-auto text-center  mb-5">
        <h1 className="text-5xl font-mono pt-10 mb-8">Project Description</h1>
        <div className="flex flex-col flex-wrap w-[80%] leading-loose m-auto">
        <p className="hover:text-cyan-900 transition duration-200 hover:ease-in font-light2 leading-loose pb-4">
          The AquaSense project aims to provide real-time monitoring of water quality parameters, including Total Dissolved Solids (TDS), temperature, and Electrical Conductivity (EC). Water quality is a critical aspect of environmental health, agriculture, and various industrial processes. Monitoring these parameters ensures the safety and efficiency of water usage.</p>
        <p className="hover:text-cyan-900  transition duration-300 hover:ease-in leading-loose pb-4">
          The AquaSense website offers users the ability to monitor and track TDS, temperature, and EC levels in water bodies such as lakes, rivers, and reservoirs. Using sensors and IoT devices, the project continuously collects data and updates it in real-time on this website.</p>
        <p className="hover:text-cyan-900  transition duration-300 hover:ease-in leading-loose pb-4">
          The project leverages Firebase Realtime Database to store and retrieve data seamlessly. Firebase offers a scalable and reliable platform for real-time data synchronization, allowing users to access the most recent water quality measurements instantly. </p>
        <p className="hover:text-cyan-900  transition duration-300 hover:ease-in pb-10 leading-loose ">
          With AquaSense, users can stay informed about the quality of water resources, enabling them to make informed decisions about water usage, conservation, and environmental management. Whether it's for recreational activities, agricultural irrigation, or industrial processes, real-time monitoring of water quality is essential for sustainable water management.
        </p>
        </div>
      </div>

      {/* About */}
      <div id="about" className=" rounded bg-gray-300 w-full   m-auto text-center ">
        <h1 className="text-5xl font-mono mt-10 pt-10 ">About Us</h1>
        {/* avatar */}
        <div className=" flex flex-col ">
          <div className=" flex flex-row flex-wrap justify-center  mt-10 ">
            <div className="avatar flex flex-col items-center justify-center">
              <div className="w-24 rounded-full mr-8 ml-8">
                <Image src={profile} />
              </div>
              <b className="hover:text-cyan-900 ">Abhishek Singh</b>
              <p className="font-light hover:text-cyan-900 ">ECE</p>
              <p className="font-light hover:text-cyan-900 ">Final year student</p>
            </div>
            <div className="avatar flex flex-col items-center justify-center">
              <div className="w-24 rounded-full mr-8 ml-8">
              <Image src={nama} />
              </div>
              <b className="hover:text-cyan-900 ">Aabhas Nama</b>
              <p className="font-light hover:text-cyan-900 ">ECE</p>
              <p className="font-light hover:text-cyan-900 ">Final year student</p>
            </div>
            <div className="avatar flex flex-col items-center justify-center">
              <div className="w-24 rounded-full mr-8 ml-8">
              <Image src={sharma} />
              </div>
              <b className="hover:text-cyan-900 ">Abhishek Sharma</b>
              <p className="font-light hover:text-cyan-900 ">ECE</p>
              <p className="font-light hover:text-cyan-900 ">Final year student</p>
            </div>
            <div className="avatar flex flex-col items-center justify-center">
              <div className="w-24 rounded-full mr-8 ml-8">
              <Image src={amol} />
              </div>
              <b className="hover:text-cyan-900 ">Amol Kumari</b>
              <p className="font-light hover:text-cyan-900 ">ECE</p>
              <p className="font-light hover:text-cyan-900 ">Final year student</p>
            </div>
           
          </div>
          <p className="w-1/2 m-auto mt-8 mb-10 font-style: italic font-light text-brown-500 hover:text-cyan-900">As students in the field of Electronics and Communication, we are passionate about leveraging technology to address real-world challenges. AquaSense represents our commitment to environmental sustainability and innovation in water quality monitoring.</p>
        </div>
      </div>

      

        {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover " href="#home">Home</a>
            <a className="link link-hover" href="#project">Project</a>
            <a className="link link-hover" href="#about">About</a>
          </nav>

          <nav>
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2024 - All rights/wrong resereved by students</p>
          </aside>
        </footer>



    </>
  );
}
