import React from 'react';

export default function Jumbotron({title}) {
    return (
        <div>
            <div class="jumbotron py-5">
                <h1 class="display-4">{title}</h1>
            </div>
        </div>
    );
}
