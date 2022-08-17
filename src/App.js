import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './cmp/Home';
import TeamBuild from './cmp/TeamBuild';
import FindMember from './cmp/FindMember';
import SelectCondition from './cmp/SelectCondition';
import SimilarMember from './cmp/SimilarMember';
import More from './cmp/More';
import RestAPI from "./RestAPI.js"


const App = () => {
    return (
        <Routes>
            {/* path는 _ 로 구분했습니다! */}
            <Route path='/' element={<Home />} />
            <Route path='/team_build' element={<TeamBuild />} />
            <Route path="/find_member" element={<FindMember />} />
            <Route path="/select_condition" element={<SelectCondition />} />
            <Route path="/similar_member" element={<SimilarMember />} />
            <Route path="/more" element={<More />} />
            {/* 가능하면 path="/more/:id" 로 하여금 */}
            <Route path="/rest_api" element={<RestAPI />} />
        </Routes>
    );
};

export default App;