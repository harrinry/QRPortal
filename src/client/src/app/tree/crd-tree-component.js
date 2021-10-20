import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { TreeView, TreeItem } from '@mui/lab';
import { StyledEngineProvider } from '@mui/material/styles';
import useStyles from './crd-tree-styles';

const Tree = (props) => {
  const classes = useStyles();
  const { mainMenu, treeData, getTreeData } = props;
  const { pathname } = useLocation();
  const splittedUrls = pathname.toLowerCase().split('/');
  const mainUrl = splittedUrls[2]
    ? `${splittedUrls[1]}/${splittedUrls[2]}`
    : `${splittedUrls[1]}`;
  const subUrl = splittedUrls[3] && `${mainUrl}/${splittedUrls[3]}`;

  const getDefaultTreeInfo = () => {
    const _defaultTreeInfo = {
      defaultExpanded: [mainUrl],
      defaultSelected: subUrl ? subUrl : mainUrl,
    };

    return _defaultTreeInfo;
  };

  const [treeDataInfo, setTreeDataInfo] = useState([]);
  const [defaultTreeInfo, setDefaultTreeInfo] = useState(getDefaultTreeInfo());

  const findIndex = (nodeId) => {
    const indexUrl = nodeId.split('/', 2).join('/').toLowerCase();

    return mainMenu.items.findIndex(item => item.href === indexUrl);
  };

  const onNodeSelect = (event, nodeId) => getTreeData(nodeId, findIndex(nodeId));

  const renderNeededData = href => treeDataInfo[findIndex(href)];

  const renderLabelIcon = iconUrl => (
    <IconButton aria-label='' size='small'>
      <img className='labelIcon' src={iconUrl} alt='' width='26' height='26'
        onError={(e) => (e.target.onerror = null, e.target.src = '/assets/favicon/favicon.png')}
      />
    </IconButton>
  );

  const isCountNotValid = node => node.hasOwnProperty('count') && node.count === 0;
  
  const renderLabel = name => (
    <Tooltip title={name}>
      <div className='label-ellipsis'>{name}</div>
    </Tooltip>
  );

  const renderTreeItem = nodes => (
    nodes.map(node => (
      <Link className='link-element'
        key={node.name}
        to={(!isCountNotValid(node)) ? `/${node.href}` : '#'}
      >
        <TreeItem
          disabled={isCountNotValid(node)}
          nodeId={node.href.toLowerCase()}
          label={renderLabel(node.name)}
          icon={node.iconUrl && renderLabelIcon(node.iconUrl)}
        >
          {
            Array.isArray(renderNeededData(node.href)[node.href.toLowerCase()])
              ? renderTreeItem(renderNeededData(node.href)[node.href.toLowerCase()])
              : [<div />]
          }
        </TreeItem>
      </Link>
    )));

  const isReloadValid = () => mainUrl && !_isEmpty(mainUrl) && !_isEmpty(mainMenu);

  useEffect(() => {
    if (isReloadValid()) {
      getTreeData(mainUrl, findIndex(mainUrl));
    }
  }, []);

  useEffect(() => {
    setTreeDataInfo(treeData);
  }, [JSON.stringify(treeData)]);

  return (
    <StyledEngineProvider injectFirst>
      <TreeView
        className={classes.treeView}
        onNodeSelect={onNodeSelect}
        defaultExpanded={_get(defaultTreeInfo, 'defaultExpanded')}
        defaultSelected={_get(defaultTreeInfo, 'defaultSelected')}
      >
        {renderTreeItem(treeDataInfo)}
      </TreeView>
    </StyledEngineProvider>
  );
};

Tree.propTypes = {
  treeData: PropTypes.array,
  getTreeData: PropTypes.func,
};

export default Tree;
