import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
export interface AppProps { title?: string; }

const App: React.SFC<AppProps> = ({ title }) => (
  <MuiThemeProvider>
    <div>
      <AppBar title={title || 'Welcome to React'} />
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
    </div>
  </MuiThemeProvider>
);

export default App;