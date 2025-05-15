'use client'

import React from "react"
import SkillFront from "./skillFront";
import SkillBack from "./skillBack";
import SkillTools from "./skillTools";

export default function SkillComponent(){
    return(
        <div className="mb-40">
            <div><SkillFront /></div>
            <div className="mt-30"><SkillBack /></div>
            <div className="mt-30"><SkillTools /></div>
        </div>
    );
}