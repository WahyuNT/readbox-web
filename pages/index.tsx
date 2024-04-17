import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="navbar bg-white py-3">
        <div className="container ">
          <img src="/img/logo.png" height={50} alt="" />
          <div className="text-end d-flex gap-4 align-items-center">
            <p className="m-0 fw-bold text-readbox">Home</p>
            <p className="m-0 text-navbar">Overview</p>
            <p className="m-0 text-navbar">How It Works</p>
            <p className="m-0 text-navbar">Pricing</p>
            <p className="m-0 text-navbar">Team</p>
            <button className="btn btn-readbox">Download</button>
          </div>
        </div>
      </nav>


      <section className="section1 ">
        <div className="container">

          <div className="d-flex justify-content-between pt-5 align-items-center">
            <div className="col-6  ">

              <h1 className="fw-bold text-black">Best Mobile App <br />
                For Read Books</h1>
              <p>
                ReadBox membantu anda untuk menerbitkan karya anda dan membantu impian anda untuk menjadi penulis dan komikus dan tentunya berpenghasilan.
              </p>
              <div className="d-flex justify-content-start gap-3">
                <button className="btn btn-readbox px-4">Download</button>
                <button className="btn btn-outline-readbox px-4">Open Web</button>
              </div>

            </div>
            <div className="col-6 text-end">
              <img src="/img/app1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section2 mt-4">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">OVERVIEW</h2>
          <div className="d-flex justify-content-center">
            <div className="col-4 px-3">
              <div className="card text-center card-overview">
                <div className="card-body">
                  <img src="/img/icon1.png" className="my-2" alt="" />
                  <h5 className="fw-bold">Apa Itu ReadBox?</h5>
                  <p>ReadBox adalah platform untuk membaca komik dan novel berbasis website dan aplikasi. ReadBox dapat membantu anda berkembang menjadi kreator hebat.</p>
                </div>
              </div>
            </div>
            <div className="col-4 px-3">
              <div className="card text-center card-overview">
                <div className="card-body">
                  <img src="/img/icon2.png" className="my-2" alt="" />
                  <h5 className="fw-bold">Cara ReadBox Bekerja?</h5>
                  <p>Kreator menciptakan karya komik atau novel lalu mengunggaanya di Readbox,lalu pembaca dapat mengakses karya tersebut melalui aplikasi maupun website ReadBox.</p>
                </div>
              </div>
            </div>
            <div className="col-4 px-3">
              <div className="card text-center card-overview">
                <div className="card-body">
                  <img src="/img/icon3.png" className="my-2" alt="" />
                  <h5 className="fw-bold">Cara Menciptakan Penghasilan?</h5>
                  <p>Keator dapat memiliki penghasilan melalui iklan yang akan ditampilkan oleh ReadBox dari para pengiklan yang ingin product nya ditampiin pada karyaa kreator.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
