import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './cmp/Home';
import TeamBuild from './cmp/TeamBuild';
import WhoYou from './cmp/WhoYou';
import Competition from './cmp/Competition';
import FindMember from './cmp/FindMember';
import SelectCondition from './cmp/SelectCondition';
import SimilarMember from './cmp/SimilarMember';
import More from './cmp/More';
import CreatingTeam from './cmp/CreatingTeam';

import RestAPI from "./RestAPI.js";


const App = () => {
    return (
        <Routes>
            {/* path는 _ 로 구분했습니다! */}
            <Route path='/' element={<Home />} />
            <Route path='/team_build' element={<TeamBuild />} />
            <Route path="/who_are_you" element={<WhoYou />} />
            <Route path='/competition' element={<Competition />} />
            <Route path="/creating_team" element={<CreatingTeam />} />
            <Route path="/find_member" element={<FindMember />} />
            <Route path="/select_condition" element={<SelectCondition />} />
            <Route path="/similar_member" element={<SimilarMember />} />
            <Route path="/more/:id" element={<More />} />
            <Route path="/rest_api" element={<RestAPI />} />
        </Routes>
    );
};

export default App;