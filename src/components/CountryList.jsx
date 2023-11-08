import Spinner from "./Spinner";
import styles from './CountryList.module.css'
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {

  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }


  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return [...arr];
    }
  }, []);


  if (!cities.length) return <Message message="Add your first city" />;

  return (
    <ul className={styles.countryList}>
      {countries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
