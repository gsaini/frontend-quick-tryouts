import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChartsContainer } from '../ChartsContainer.tsx';

const rechartsMock = {
  BarChart: ({ children, ...props }) => <div data-testid="bar-chart" {...props}>{children}</div>,
  Bar: ({ children, ...props }) => <div data-testid="bar" {...props}>{React.Children.map(children, child => React.cloneElement(child, { ...props }))}</div>,
  XAxis: ({ children, ...props }) => <div data-testid="x-axis" {...props}>{React.Children.map(children, child => React.cloneElement(child, { ...props }))}</div>,
  Tooltip: ({ children, ...props }) => <div data-testid="tooltip" {...props}>{React.Children.map(children, child => React.cloneElement(child, { ...props }))}</div>,
  CartesianGrid: () => <div data-testid="cartesian-grid"/>,
  ResponsiveContainer: ({ children }) => <div>{children}</div>,
  Rectangle: ({ children, ...props }) => <div {...props}>{children}</div>
};
jest.mock('recharts', () => rechartsMock);

describe('ChartsContainer', () => {


  it('renders BarChart correctly', () => {
    render(<ChartsContainer />);

    const barChartElement = screen.getByTestId('bar-chart');
    expect(barChartElement).toBeInTheDocument();
  });

  it('renders XAxis correctly', () => {
    render(<ChartsContainer />);

    const xAxisElement = screen.getByTestId('x-axis');
    expect(xAxisElement).toBeInTheDocument();
  });

  it('renders Tooltip correctly', () => {
    render(<ChartsContainer />);

    const tooltipElement = screen.getByTestId('tooltip');
    expect(tooltipElement).toBeInTheDocument();
  });
  it('renders Bar with correct dataKey', () => {
    render(<ChartsContainer />);
      const barElement = screen.getByTestId('bar');
      expect(barElement).toBeInTheDocument();
      expect(barElement).toHaveAttribute('datakey', 'uv');
  });
});