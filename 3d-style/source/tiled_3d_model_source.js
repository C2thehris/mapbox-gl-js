// @flow

import {Evented} from '../../src/util/evented.js';
import type {Source} from '../../src/source/source.js';
import type Tile from '../../src/source/tile.js';
import type {Callback} from '../../src/types/callback.js';
import type Dispatcher from '../../src/util/dispatcher.js';
import type {ModelSourceSpecification} from '../../src/style-spec/types.js';

class Tiled3DModelSource extends Evented implements Source {
    type: 'batched-model';
    id: string;
    minzoom: number;
    maxzoom: number;
    tileSize: number;

    /**
     * @private
     */
    // eslint-disable-next-line no-unused-vars
    constructor(id: string, specification: ModelSourceSpecification, dispatcher: Dispatcher, eventedParent: Evented) {
        super();
        this.id = id;
    }

    hasTransition(): boolean {
        return false;
    }
    loaded(): boolean {
        return false;
    }
    // eslint-disable-next-line no-unused-vars
    loadTile(tile: Tile, callback: Callback<void>) {}

    serialize(): Object {
        return {
            type: 'batched-model'
        };
    }
}

export default Tiled3DModelSource;