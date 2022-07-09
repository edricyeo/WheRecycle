import React from 'react';
import InfoBlock from './InfoBlock';
import searchIcon from '../assets/images/search.png';
import directionIcon from '../assets/images/directions.png';
import recycleIcon from '../assets/images/recycling-symbol.png';
import bIcon from '../assets/images/bIcon.png';

const Overview = () => {
    return (
        <div className="overview">
            <InfoBlock
                icon={searchIcon}
                text="Do your part in protecting our environment by recycling! Using your device’s location, find the nearest recycling and trash bins near you."
            />
            <InfoBlock
                icon={directionIcon}
                text="Out and about? Using Google Maps, get step-by-step directions to the nearest recycling or trash bin in your area. You can walk, run, or ride there without losing your way."
            />
            <InfoBlock
                icon={recycleIcon}
                text="Looking to get rid of a water bottle? Paper? Cans? Just scan the item to see if it can be recycled. It’s as easy as that. "
            />

            <InfoBlock
                icon={bIcon}
                text="Simply use our scanner to scan the recyclable item and toss it into the bin! Following confirmation of the item being recycled, points will be awarded to you!"
            />
        </div>
    );
};

export default Overview;
