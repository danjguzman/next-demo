"use client"
import React from 'react';
import './index.scss';

interface CardProps {
    icon?: string;
    label?: string;
    value?: string | number;
    valueFormat?: string;
    flip?: boolean;
    children?: React.ReactNode;
    onClick?: ()=>void;
}

interface CardLabelProps {
    label?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

interface CardIconProps {
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

interface CardValueProps {
    value?: string | number;
    valueFormat?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

/**************************************************
* Card Component
* 
* No children will be limited to preset layout.
* Adding children will allow some custom layout
* using pre-defined styles.
**************************************************/

/* Simple Money Fomatter: Can be extended for additional currencies (move to Utils function import) */
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

/* Generic Number Formatter (move to Utils function import) */
const numberFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    useGrouping: true
});

/* Main Card Component */
export const Card =(props: CardProps)=> {
    const { icon, label, value, valueFormat, flip, children, onClick } = props;

    return (
        <div className="card" onClick={onClick}>
            {children ? children : 
                <>
                    {/* Default Layout From Data Only */}
                    {icon && <CardIcon icon={icon} />}
                    <CardLabel label={label} />
                    <CardValue value={value} valueFormat={valueFormat} />
                    {flip && <div className="card-flip"><i className="far fa-chart-bar" /></div>}
                </>
            }
        </div>
    );
};

/* Card Icon Atom */
export const CardIcon =({ icon, className, style, children }: CardIconProps)=> {
    return (
        <div className={`card-icon ${className}`} style={style}>{children ? children : <i className={icon} />}</div>
    );
};

/* Card Label Atom */
export const CardLabel =({ label, className, style, children }: CardLabelProps)=> {
    return (
        <div className={`card-label ${className}`} style={style}>{children ? children : label}</div>
    );
};

/* Card Value Atom */
export const CardValue =({ value, valueFormat, className, style, children }: CardValueProps)=> {

    /* Format for Currency, Numbers or Strings */
    const formats: { [key: string]: string } = {
        "usd": formatter.format(Number(value)),
        "number": numberFormatter.format(Number(value)),
        "default": value?.toString() || '',
    };

    return (
        <div className={`card-value ${className}`} style={style}>
            {children ? children : formats[valueFormat?.toLowerCase() || 'default']}
        </div>
    );
};