import React, {useEffect , useState} from 'react'
import './result.css'

const url = "https://geo.ipify.org/api/v2/country?apiKey=at_Wu8pUYf4kpWWnUc814adl2UeyNbdn&ipAddress=8.8.8.8"
const key = "at_Wu8pUYf4kpWWnUc814adl2UeyNbdn"




const Result = () => {

    const [ip , setIp] = useState('')
    const [data , setData] = useState({})
    const [timezone , setTimezone] = useState('')
    const [region , setregion] = useState('')
    const [country , setcountry] = useState('')

    useEffect(() => {
        // fetch("https://geo.ipify.org/api/v2/country?apiKey=at_Wu8pUYf4kpWWnUc814adl2UeyNbdn&ipAddress=8.8.8.8")
        // .then((res) => res.json())
        // .then((data) => console.log(data))
        getUserAddress();

    })

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_Wu8pUYf4kpWWnUc814adl2UeyNbdn&ipAddress=${ip}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.location)
            setData(data)
            setTimezone(data.location.timezone)
            setregion(data.location.region)
            setcountry(data.location.country)
        })
    } , [])


    const getUserAddress = ()=>{
        fetch('https://geolocation-db.com/json/')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setIp(data.IPv4)
            console.log(ip)
        })
        // console.log(res.json());
        // setIp(res)
    }
    


  return (
    <div className='result'>
        <div className='data'>
            <p>IP ADDRESS</p>
            <p>{data.ip}</p>
        </div>

        <div className='data'>
            <p>LOCATION</p>
              <p>{country},{region}</p>
        </div>

        <div className='data'>
            <p>TIMEZONE</p>
              <p>{timezone}</p>
        </div>

        <div className='data'>
            <p>ISP</p>
              <p>{data.isp}</p>
        </div>
    </div>
  )
}

export default Result