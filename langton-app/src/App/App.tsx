import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Card } from 'material-ui';
import Grid from './Grid';
export interface AppProps { title?: string; }

const App: React.SFC<AppProps> = ({ title }) => (
  <MuiThemeProvider>
    <div>
      <AppBar title={title || 'Welcome to React'} />
      <div>
        <div className="stretch">
          <Card className="md-card">
            <Grid />
          </Card>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;