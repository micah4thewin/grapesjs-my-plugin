export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  // Create a new component <body>
  domc.addType('body', {
    // Make the editor understand when to bind `body`
    isComponent: el => el.tagName === 'body',
    model: {
      defaults: {
        tagName: 'body',
        draggable: false, // Can be dropped only inside `form` elements
        droppable: 'section', // Can't drop other elements insidd
        stylable: ['background', 'background-color'],
        attributes: {
          class: 'body'
        },
        components: '',
        style: {},
      },
    },
    view: {},
  });
  // Create a new component <frame>
  domc.addType('section', {
    // Make the editor understand when to bind `my-input-type`
    isComponent: el => el.tagName === 'SECTION',

    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'section',
        draggable: 'body, body *', // Can be dropped only inside `form` elements
        droppable: 'main', // Can't drop other elements inside
        attributes: {},
        traits: [],
        style: {
          width: '100%',
          height: 'auto',
          'min-height': '300px',
          background: 'none',
          display: 'flex',
          padding: '25px',
          margin: 'auto',
          display: 'flex',
          overflow: 'hidden',
          'justify-content': 'safe center',
          'flex-direction': 'row',
          'align-items': 'center',
          'flex-wrap': 'wrap',
        },
        stylable: ['height', ],
        'stylable-require': ['height', 'background'],
        unstylable: ['width', 'max-width', 'min-width', 'display', 'border', 'border-radius', 'flex-direction', 'flex-wrap', 'align-items', 'justify-content', 'align-content', 'float', 'position', 'top', 'right', 'left', 'bottom', 'margin', 'transition', 'transform', 'box-shadow', 'font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'order'],

      }
    }
  });
  // Create a new component <cell>
  domc.addType('group', {
    // Make the editor understand when to bind `my-input-type`
    isComponent: el => el.tagName === 'main',

    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: 'main',
        draggable: 'section, section *', // Can be dropped only inside `form` elements
        droppable: true, // Can't drop other elements inside
        attributes: {},
        traits: [],
        resizable: true,
        style: {
          width: 'auto',
          'min-width': '250px',
          height: 'auto',
          'min-height': '250px',
          background: 'solid',
          display: 'flex',
          padding: '25px',
          display: 'flex',
          overflow: 'hidden',
          'justify-content': 'safe center',
          'flex-direction': 'column',
          'align-items': 'center',
        },
        styles: {},
        stylable: ['height', 'background'],
        'stylable-require': ['height', 'background'],
        unstylable: ['display', 'flex-direction', 'flex-wrap', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self', 'align-content', 'float', 'position', 'top', 'right', 'left', 'bottom', 'margin', 'transition', 'transform','font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow'],

      }
    }
  });

};
