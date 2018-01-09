import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { 
  TooltipedImagesContainer,
  TooltipedImageCreate,
  TooltipedImagePreview,
  TooltipedImageEdit,
} from "./modules/TooltipedImage/components"
import "./styles/main.scss";

const App = () => (
  <div>
    <Switch>
      <Route path ="/" exact component={ TooltipedImagesContainer }/>
      <Route path ="/create" component={ TooltipedImageCreate }/>
      <Route path ="/:id/edit" component={ TooltipedImageEdit } />
      <Route path ="/:id/preview" component={ TooltipedImagePreview }/>
    </Switch>
  </div>
)

export default App