import React, { useState, useEffect }from 'react';
import "./widgets.css";
import WidgetCard from './WidgetsCard';
import apiClient from '../../spotify';

export default function Widgets({ artistID }) {
    const [similar, setSimilar] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [newRelease, setNewRelease] = useState([]);
    const id = artistID?.artists[0]?.id;

    useEffect(() => {
        if (artistID) {
            apiClient
                .get(`/artists/${id}/related-artists`)
                .then((res) => {
                    const a = res.data?.artists.slice(0, 3);
                    setSimilar(a);
                })
                .catch((err) => console.error(err));

            apiClient
                .get(`/browse/featured-playlists`)
                .then((res) => {
                    const a = res.data?.playlists.items.slice(0, 3);
                    setFeatured(a);
                })
                .catch((err) => console.error(err));

            apiClient
                .get(`/browse/new-releases`)
                .then((res) => {
                    const a = res.data?.albums.items.slice(0, 3);
                    setNewRelease(a);
                })
                .catch((err) => console.error(err));
            }
        } , [artistID]);

        return (
            <div classmate="widgets-body flex">
                <WidgetCard title="Similar Artists" similar={similar} />
                <WidgetCard title="Made For You" featured={featured} />
                <WidgetCard title="New Releases" newRelease={newRelease} />
            </div>
  );
}
 