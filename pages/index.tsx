
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
        <div className="container mt-5">

          <h2 className="text-center fw-bold mb-5 text-black">OVERVIEW</h2>
          <div className="d-flex justify-content-between">
            <div className="col-4 px-5">
              <div className="card text-center card-overview  px-2 h-100">
                <div className="card-body ">
                  <img src="/img/icon1.png" className="my-2" alt="" />
                  <h5 className="fw-bold text-black">Apa Itu ReadBox?</h5>
                  <p>ReadBox adalah platform untuk membaca komik dan novel berbasis website dan aplikasi. ReadBox dapat membantu anda berkembang menjadi kreator hebat.</p>
                </div>
              </div>
            </div>
            <div className="col-4 px-5">
              <div className="card text-center card-overview px-2 h-100">
                <div className="card-body">
                  <img src="/img/icon2.png" className="my-2" alt="" />
                  <h5 className="fw-bold text-black">Cara ReadBox Bekerja?</h5>
                  <p>Kreator menciptakan karya komik atau novel lalu mengunggaanya di Readbox,lalu pembaca dapat mengakses karya tersebut melalui aplikasi maupun website ReadBox.</p>
                </div>
              </div>
            </div>
            <div className="col-4 px-5">
              <div className="card text-center card-overview px-2 h-100">
                <div className="card-body">
                  <img src="/img/icon3.png" className="my-2" alt="" />
                  <h5 className="fw-bold text-black">Cara Menciptakan Penghasilan?</h5>
                  <p>Keator dapat memiliki penghasilan melalui iklan yang akan ditampilkan oleh ReadBox dari para pengiklan yang ingin product nya ditampiin pada karyaa kreator.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">


            <div className="col-">
              <img src="/img/App2.png" alt="" />
            </div>
            <div className="col ms-5 pe-5">
              <h1 className="fw-bold text-black">Segera Hadir di Mobile</h1>
              <p>ReadBox juga akan hadir dalam aplikasi yang dapat di unduh di perangkat iOS dan Android agar mempermudah pengguna untuk mengakses ReadBox</p>
            </div>

          </div>
        </div>
      </section>
      <section className="section4 py-5 ">
        <div className="container ">

          <h2 className="text-center text-black fw-bold mt-5 mb-5 ">How It Works</h2>
          <div className="d-flex mb-5 pb-5">
            <div className="col">
              <img src="/img/work1.png" alt="" />
            </div>
            <div className="col">
              <img src="/img/work2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section5 py-5">
        <div className="container mb-5">
          <h2 className="text-center text-black fw-bold mt-5 mb-5">Pricing</h2>
          <div className="d-flex justify-content-center gap-4">
            <div className="card card-pricing">
              <div className="card-body text-center">
                <div className="d-flex flex-column px-5">
                  <small className="mb-2 fw-bold">REGULAR</small>
                  <h1 className="fw-bold mb-3">FREE</h1>
                  <p className="mb-3">Akses baca komik</p>
                  <p className="mb-3">Publish komik</p>
                  <p className="mb-3">Akses baca Novel</p>
                  <p className="mb-3">Publish Novel</p>
                  <button className="btn btn-reguler mt-2">Reguler</button>
                </div>
              </div>
            </div>
            <div className="card card-pricing">
              <div className="card-body text-center">
                <div className="d-flex flex-column px-5">
                  <small className="mb-2 fw-bold text-black">PREMIUM</small>
                  <h1 className="fw-bold mb-3 text-readbox">$4.99<small className="mo-price">/mo</small> </h1>
                  <p className="mb-3">Akses baca komik</p>
                  <p className="mb-3">Publish komik</p>
                  <p className="mb-3">Akses baca Novel</p>
                  <p className="mb-3">Publish Novel</p>
                  <button className="btn btn-readbox mt-2">Langganan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section6 py-5">
        <h2 className="text-center text-black fw-bold mt-5 mb-5">Team</h2>
        <div className="d-flex justify-content-center gap-5 mb-5">
          <div className="col-2">
            <div className="card card-team">
              <div className="card-body text-center px-4 py-5">
                <img src="/img/Salma.png" className="w-75 mb-4" alt="" />
                <h5 className="fw-bold text-black mt-3 ">SALMA KHOIRUN NISAA</h5 >
                <p className="fw-bold text-grey mb-auto">CMO</p>
              </div>
            </div>
          </div>
          <div className="col-2 mt-5">
            <div className="card card-team">
              <div className="card-body text-center px-4 py-5">
                <img src="/img/Wulan.png" className="w-75 mb-4" alt="" />
                <h5 className="fw-bold text-black mt-3 ">PRATIWI WULANDARI</h5 >
                <p className="fw-bold text-grey mb-auto">CEO</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card card-team">
              <div className="card-body text-center px-4 py-5">
                <img src="/img/Wahyu.png" className="w-75 mb-4" alt="" />
                <h5 className="fw-bold text-black mt-3 ">WAHYU NUSANTARA</h5 >
                <p className="fw-bold text-grey mb-auto">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section7 py-5 text-center">
        <div className="d-flex flex-column justify-content-center">

          <h1 className="fw-bold mb-3">Subscribe to our newsletter for <br />
            fast updates & news</h1>
          <div className="d-flex justify-content-center ">
            <div className="card card-contact w-25 ps-3 pe-1 py-1 ">
              <div className="d-flex align-items-center">
                <div className="col">
                  <input type="text" className="w-100 border-0" placeholder="Email" />
                </div>
                <div className="col-">
                  <button className="btn btn-readbox">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
