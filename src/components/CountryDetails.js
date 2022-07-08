import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

function CountryDetails(props) {
  const {countries} = props;
  let {id} = useParams();

  id = id || countries[0].alpha3Code

  /*if (typeof id === 'undefined') {
    id = 'ABW'
  }*/

  //const findCountry = async (alpha3Code) => {
   // return countries.find(country => {
    //   return country.alpha3Code === alpha3Code
   // })
  // let country
   //const res = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
   //country = await res.json()

   //axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
   // .then(response => {
   //   country = response.data
   // })
   // .catch(error => console.log(error))

   const findCountry = (alpha3Code) => {
      return countries.find(country => {
        return country.alpha3Code === alpha3Code
      })
   }



  /* const country = countries.find(country => {
    return country.alpha3Code === id
  }) */

  const country = findCountry(id)

  return (
          <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>

                      {
                        country.borders.map(border => {
                          const borderCountry = findCountry(border)
                          return (
                            <li key={border}><Link to={`/${border}`}>{borderCountry.name.common}</Link></li>
                          )
                        })
                      }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

  )
}

export default CountryDetails
