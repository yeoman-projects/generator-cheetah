import React from 'react';
//import { ImageDir } from '../components/ImageDir';
export default function App() {
    return (
        <div>
            To begin:  <ul>
                <li>add as many .jpg images to the images folder as you wish</li>
                <li>import ImageDir above</li>
                <li>call ImageDir with props of icon name (without extension) and size. {/* <ImageDir icon={'machine'} size={'1920px'}/> */}</li>
                <li>build on this base to match your preference, i.e. add png or svg support.</li>
            </ul>
        </div>
    )
}