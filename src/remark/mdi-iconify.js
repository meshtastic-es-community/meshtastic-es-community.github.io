import {visit} from 'unist-util-visit';

const plugin = (options) => {
    const transformer = async (ast) => {
        let hasIconifyIcons = false;
        const regex = /:mdi-([a-zA-Z0-9-_]+):/g;

        // First pass: check if we have any mdi icons
        visit(ast, 'text', (node) => {
            if (regex.test(node.value)) {
                hasIconifyIcons = true;
            }
        });

        // Add import if we found icons
        if (hasIconifyIcons) {
            ast.children.unshift({
                type: 'mdxjsEsm',
                value: 'import {InlineIcon} from "@iconify/react";',
                data: {
                    estree: {
                        type: 'Program',
                        body: [{
                            type: 'ImportDeclaration',
                            specifiers: [{
                                type: 'ImportSpecifier',
                                imported: {type: 'Identifier', name: 'Icon'},
                                local: {type: 'Identifier', name: 'Icon'}
                            },
                            {
                                type: 'ImportSpecifier',
                                imported: {type: 'Identifier', name: 'InlineIcon'},
                                local: {type: 'Identifier', name: 'InlineIcon'}
                            }],
                            source: {type: 'Literal', value: '@iconify/react'}
                        }],
                        sourceType: 'module'
                    }
                }
            });
        }

        // Second pass: replace the icons
        visit(ast, 'text', (node, index, parent) => {
            const text = node.value;

            if (!regex.test(text)) {
                return;
            }

            const parts = [];
            let lastIndex = 0;
            let match;

            regex.lastIndex = 0;

            while ((match = regex.exec(text)) !== null) {
                if (match.index > lastIndex) {
                    parts.push({
                        type: 'text',
                        value: text.slice(lastIndex, match.index)
                    });
                }

                parts.push({
                    type: 'mdxJsxTextElement',
                    name: text === match[0] ? 'Icon' : 'InlineIcon',
                    attributes: [
                        {
                            type: 'mdxJsxAttribute',
                            name: 'icon',
                            value: `mdi:${match[1]}`
                        }
                    ],
                    children: []
                });

                lastIndex = regex.lastIndex;
            }

            if (lastIndex < text.length) {
                parts.push({
                    type: 'text',
                    value: text.slice(lastIndex)
                });
            }

            if (parts.length > 0) {
                parent.children.splice(index, 1, ...parts);
            }
        });
    };
    return transformer;
};

export default plugin;
