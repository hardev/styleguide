import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Error404 from './routes/Error404';

import BorderRadius from './routes/Design/BorderRadius';
import ColorScheme from './routes/Design/ColorScheme';
import Depth from './routes/Design/Depth';
import Iconography from './routes/Design/Iconography';
import Typography from './routes/Design/Typography';

import AgentSignatures from './routes/Components/AgentSignatures';
import Buttons from './routes/Components/Buttons';
import FilterPills from './routes/Components/FilterPills';
import FormElements from './routes/Components/FormElements';
import ListingCards from './routes/Components/ListingCards';
import ListingStatusTags from './routes/Components/ListingStatusTags';
import Popovers from './routes/Components/Popovers';
import SearchMap from './routes/Components/SearchMap';
import Tables from './routes/Components/Tables';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/har_styleguide/" exact={true} component={App} />

      <Route path="/har_styleguide/design/border_radius" component={BorderRadius} />
      <Route path="/har_styleguide/design/color_scheme" component={ColorScheme} />
      <Route path="/har_styleguide/design/depth" component={Depth} />
      <Route path="/har_styleguide/design/iconography" component={Iconography} />
      <Route path="/har_styleguide/design/typography" component={Typography} />

      <Route path="/har_styleguide/components/agent_signatures" component={AgentSignatures} />
      <Route path="/har_styleguide/components/buttons" component={Buttons} />
      <Route path="/har_styleguide/components/filter_pills" component={FilterPills} />
      <Route path="/har_styleguide/components/form_elements" component={FormElements} />
      <Route path="/har_styleguide/components/listing_cards" component={ListingCards} />
      <Route path="/har_styleguide/components/listing_status_tags" component={ListingStatusTags} />
      <Route path="/har_styleguide/components/popovers" component={Popovers} />
      <Route path="/har_styleguide/components/search_map" component={SearchMap} />
      <Route path="/har_styleguide/components/tables" component={Tables} />

      <Route path="/*" exact={true} component={Error404} />

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

// registerServiceWorker();
serviceWorker.unregister();
