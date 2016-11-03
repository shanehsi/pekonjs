import * as React from "react";
import { ReactElement } from "react";
import { render } from "react-dom";

/**
 *  Wrap with react-hot-loader/AppContainer
 *
 * @param app React.Element
 * @param mountId
 */
export function hotRender(app: ReactElement<any>, mountId: string): void {
  if (process.env.NODE_ENV === "production") {
    const Root = function () {
      return app;
    };

    render(<Root/>,
      document.getElementById(mountId)
    );
  } else {
    // https://github.com/ReactTraining/react-router/issues/2704#issuecomment-212936927
    class Root extends React.Component<any, any> {
      public render() {
        return app;
      }
    }

    const { AppContainer } = require("react-hot-loader");

    render(
      <AppContainer>
        <Root/>
      </AppContainer>,
      document.getElementById(mountId)
    );
  }
}
