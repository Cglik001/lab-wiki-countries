import { Link } from 'react-router-dom'

function CountriesList(props) {
  const {countries} = props

  return (
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {
                countries.map(country => {
                  return (
                    <Link
                      to={`/${country.alpha3Code}`}
                      className="list-group-item list-group-item-action"
                      key ={country.alpha3Code}
                    >
                      <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        width='16px'
                        alt={country.alpha2Code} />
                      <span>   {country.name.common}</span>

                    </Link>
                  )
                })
              }
            </div>
          </div>
  )
}

export default CountriesList
