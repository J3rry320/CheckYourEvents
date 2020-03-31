/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {PureComponent} from 'react';
import {Container, Header, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {createArray} from '../utils/componentHelper';
interface IPropsForLayout {
  rows: number;
  cols: number;
  content: React.ReactChild[];
}
// Good Job Needs More refinement
// Needs to be revisited later
export class Layout extends PureComponent<IPropsForLayout> {
  createLayout = () => {
    const {rows, cols, content} = this.props;
    let totalRows = createArray(rows);
    let totalCols = createArray(cols);
    return totalRows.map((x, i) => (
      <Row>
        {totalCols.map((cols, itterator) => (
          <Col>
            {content.map((element, i) => {
              if (i === 1) {
                return element;
              }
            })}
          </Col>
        ))}
      </Row>
    ));
  };
  render() {
    return (
      <Container>
        <Header />

        <Grid>
          {this.createLayout()}
          {/* <Row>
            <Col>
              <Text>Whats your plan for today ?</Text>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col>
              <Text> Whats your plan for today ?</Text>
            </Col>
          </Row> */}
        </Grid>
      </Container>
    );
  }
}

export default Layout;
