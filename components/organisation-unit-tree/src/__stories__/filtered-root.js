import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const FilteredRoot = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000', 'A0000000001']}
        initiallyExpanded={['/A0000000000/A0000000001']}
        filter={['/A0000000000']}
    />
)

FilteredRoot.storyName = 'Filtered (root)'
