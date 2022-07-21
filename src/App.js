import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ScrollTop from './components/ScrollTop';

function App() {
return (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Header />
		<SearchBar />
		<ScrollTop />
	</ThemeProvider>
);
}

export default App;
