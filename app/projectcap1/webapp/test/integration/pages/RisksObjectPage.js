sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'projectcap1',
            componentId: 'RisksObjectPage',
            entitySet: 'Risks'
        },
        CustomPageDefinitions
    );
});