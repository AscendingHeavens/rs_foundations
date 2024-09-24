import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Frontend Development</a>
      <a className="link link-hover">Backend & Apis Development</a>
      <a className="link link-hover">Marketing & Advertisement</a>
      <a className="link link-hover">Full-stack Develoment</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
    </nav>
  </footer>
  )
}

export default Footer