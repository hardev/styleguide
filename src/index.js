import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Error404 from './routes/Error404';

import BorderRadius from './routes/Design/BorderRadius';
import ColorScheme from './routes/Design/ColorScheme';
import Depth from './routes/Design/Depth';
import Iconography from './routes/Design/Iconography';
import Typography from './routes/Design/Typography';
import Images from './routes/Design/images';

import AgentSignatures from './routes/Components/AgentSignatures';
import Buttons from './routes/Components/Buttons';
import FilterPills from './routes/Components/FilterPills';
import FormElements from './routes/Components/FormElements';
import Cards from './routes/Components/Cards';
import CardsV2 from './routes/Components/CardsV2';
import ListingCards from './routes/Components/ListingCards';
import ListingCardsPortraitV2 from './routes/Components/ListingCardsPortraitV2';
import ListingCardsLandscapeV2 from './routes/Components/ListingCardsLandscapeV2';
import ListingStatusTags from './routes/Components/ListingStatusTags';
import Popovers from './routes/Components/Popovers';
import SearchMap from './routes/Components/SearchMap';
import Tables from './routes/Components/Tables';
import Tabs from './routes/Components/Tabs';
import Modal from './routes/Components/Modal';
import Labels from './routes/Components/Labels';
import Messages from './routes/Components/Messages';
import Sitewide from './routes/Components/Sitewide';
import Favorite from './routes/Components/Favorites';

import Heros from './routes/TemplateBlocks/Heros';
import CMSBlocks from './routes/TemplateBlocks/CMSBlocks';
import AgentHeader from './routes/TemplateBlocks/AgentHeader';
import BrokerHeader from './routes/TemplateBlocks/BrokerHeader';
import TeamHeader from './routes/TemplateBlocks/TeamHeader';

// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const basename = process.env.NODE_ENV === 'production'? '/HTML_crm/styleguide/': undefined;
ReactDOM.render(
  <BrowserRouter basename={basename}>
    <Switch>
      <Route path="/" exact={true} component={App} />

      <Route path="/design/border_radius" component={BorderRadius} />
      <Route path="/design/color_scheme" component={ColorScheme} />
      <Route path="/design/depth" component={Depth} />
      <Route path="/design/iconography" component={Iconography} />
      <Route path="/design/typography" component={Typography} />
      <Route path="/design/images" component={Images} />

      <Route path="/components/agent_signatures" component={AgentSignatures} />
      <Route path="/components/buttons" component={Buttons} />
      <Route path="/components/filter_pills" component={FilterPills} />
      <Route path="/components/form_elements" component={FormElements} />
      <Route path="/components/cards" component={Cards} />
      <Route path="/components/cardsv2" component={CardsV2} />
      <Route path="/components/listing_cards" component={ListingCards} />
      <Route path="/components/listing_cards_portrait_v2" component={ListingCardsPortraitV2} />
      <Route path="/components/listing_cards_landscape_v2" component={ListingCardsLandscapeV2} />
      <Route path="/components/listing_status_tags" component={ListingStatusTags} />
      <Route path="/components/popovers" component={Popovers} />
      <Route path="/components/search_map" component={SearchMap} />
      <Route path="/components/tables" component={Tables} />
      <Route path="/components/tabs" component={Tabs} />
      <Route path="/components/modal" component={Modal} />
      <Route path="/components/labels" component={Labels} />
      <Route path="/components/messages" component={Messages} />
      <Route path="/components/sitewide" component={Sitewide} />
      <Route path="/components/favorites" component={Favorite} />

      <Route path="/template_blocks/heros" component={Heros} />
      <Route path="/template_blocks/cmsblocks" component={CMSBlocks} />
      <Route path="/template_blocks/agent_header" component={AgentHeader} />
      <Route path="/template_blocks/broker_header" component={BrokerHeader} />
      <Route path="/template_blocks/team_header" component={TeamHeader} />

      <Route path="/*" exact={true} component={Error404} />

    </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

// registerServiceWorker();
serviceWorker.unregister();
