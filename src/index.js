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
import Cards from './routes/Components/Cards';
import ListingCards from './routes/Components/ListingCards';
import ListingStatusTags from './routes/Components/ListingStatusTags';
import Popovers from './routes/Components/Popovers';
import SearchMap from './routes/Components/SearchMap';
import Tables from './routes/Components/Tables';
import Modal from './routes/Components/Modal';

import Heros from './routes/TemplateBlocks/Heros';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />

      <Route path="/design/border_radius" component={BorderRadius} />
      <Route path="/design/color_scheme" component={ColorScheme} />
      <Route path="/design/depth" component={Depth} />
      <Route path="/design/iconography" component={Iconography} />
      <Route path="/design/typography" component={Typography} />

      <Route path="/components/agent_signatures" component={AgentSignatures} />
      <Route path="/components/buttons" component={Buttons} />
      <Route path="/components/filter_pills" component={FilterPills} />
      <Route path="/components/form_elements" component={FormElements} />
      <Route path="/components/cards" component={Cards} />
      <Route path="/components/listing_cards" component={ListingCards} />
      <Route path="/components/listing_status_tags" component={ListingStatusTags} />
      <Route path="/components/popovers" component={Popovers} />
      <Route path="/components/search_map" component={SearchMap} />
      <Route path="/components/tables" component={Tables} />
      <Route path="/components/modal" component={Modal} />

      <Route path="/template_blocks/heros" component={Heros} />

      <Route path="/*" exact={true} component={Error404} />

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

// registerServiceWorker();
serviceWorker.unregister();
