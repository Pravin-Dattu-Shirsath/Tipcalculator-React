import React, { useState } from 'react';

function App(){
  const [amount, setAmount] = useState()
  const [tipperc, setTipperc] = useState(0)
  const [name, setName] = useState()
  const [totaltip, setTotaltip] = useState(0)
  const [data, setData] = useState([])
  const [disp, setDisp] = useState("none")

  const tipamount = parseFloat(amount) * parseFloat(tipperc)
  function List() {
    if (amount > 0 && name) {
      setData([...data, [name, tipamount]])
      setTotaltip(totaltip + tipamount)
      setDisp("block")
    } else {
      alert("Enter The Bill Amount & name")
    }

    console.log(data)
  }
  function cleararray() {
    setData([])
    setTotaltip(0)
  }
  
  return (
    <>
        <div className='d-flex justify-content-center '>

        <div className="contaier w-50 mx-5 my-4 border rounded-2">
          <div className='text-center'>
            <h1 className="container border bg-primary text-white">Tip Calculator</h1></div>
          {/* MAIN CONTAIN input */}
          <div className='text-center mb-3'>
            <h4 >ENTER YOUR AMOUNT</h4>
            <div className=' row' ><h2 className=' col-1'>₹</h2><div className=' col-11'><input type="number" className='form-control  ' value={amount} onChange={(e) => { setAmount(e.target.value) }} />
            </div></div>
          </div>

          <div class="row align-items-start p-1">
            <div class="col-4">
              <select selected value={tipperc} onChange={(e) => { setTipperc(e.target.value) }} className="form-select" aria-label="Default select example">
                <option >how was service</option>
                <option value=".25">25% Good </option>
                <option value=".50">50% Better</option>
                <option value=".75">75% Excelent</option>

              </select>
            </div>
            <div class="col-4">
              <input type="text" className=' form-control' placeholder='Customer Name' value={name} onChange={(ex) => { setName(ex.target.value) }} />
            </div>
            <div class="col-4">
              <button className='btn btn-primary' onClick={List}>Add Customer</button>  </div>
          </div>
          <div className='m-1  ' >



          </div>
          {/* OUTPUT */}
          <div className='mt-5 position-relative ' table table-dark table-striped style={{ display: { disp } }}>

            <h3 className='border p-1 text-center bg-primary text-white'>Customer List</h3>

            <button className='btn btn-dark position-absolute top-0 end-0' onClick={cleararray}>Clear</button>



            {

              data.map((item) => {
                return <p>NAME: {item[0]} and this tip {item[1]}</p>

              })

            }
          </div>

          <h5 className='text-center p-2  bg-primary text-white mt-3'>Calculate tip and Customer </h5>
          <div className='text-center' >
            <table className="table table-dark table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">  Total customer</th>
                  <th scope="col">Total tip</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                  <td>{data.length}</td>
                  <td>{totaltip}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* FOOTER */}
          <div>
            <h5 className="p-3 mb-2 bg-primary text-white  text-center">@2022 TIP-CALCULATOR</h5>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;






