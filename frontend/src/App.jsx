import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Layout from './components/Layout'
import PageNotFound from './pages/NotFound'
import Category from './pages/Category'
import HomePage from './pages/HomePage'
import ReviewDetails from './pages/ReviewDetails'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

const App = () => {

  return (
    <BrowserRouter>

      <ApolloProvider client={client}>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='category/:id' element={<Category />} />
            <Route path='details/:id' element={<ReviewDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </ApolloProvider>

    </BrowserRouter>
  )
}

export default App
