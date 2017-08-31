
/**
 * ztree 封装
 */
	function Ztree(){
		this.instance;	//ztree对象
		this.setting;	//设置信息
		this.treeData;	//初始化时加载的数据
		
		this.init = function(id,setting,treeData,expand){
			var defaults = {
				view: {
					selectedMulti: false
				}
			};
			this.setting = setting =  $.extend(defaults,setting);
			this.treeData = treeData;
			this.instance = $.fn.zTree.init($("#" + id), setting,treeData);
			if (expand) {
				this.instance.expandAll(expand);
			} else {
				this.instance.expandAll(false);
			}
		};
		
		this.getInstance = function(){
			return this.instance;
		}
		
		//选中id列表所指定的节点
		this.setCheckedNodesById = function(checkedIds){
			var instance = this.instance;
			for(var i=0; i<checkedIds.length; i++){
				var id = checkedIds[i];
				var node = instance.getNodeByParam('id',id,null);
				if(node){
					node.checked = true;
					instance.updateNode(node);				
				}				
			}
		},
		//获得选中节点id组成的数据
		this.getSelectedIdArray = function(){
			var nodes = this.instance.getCheckedNodes(true);
			var array = [];
			if(nodes != null && nodes.length > 0){
				for(var i=0; i<nodes.length; i++){
					array.push(nodes[i]['id']);
				}
			}
			return array;
		}
		//获得全部节点数据
		this.getAllNodes = function(){
			var nodes = this.instance.transformToArray(this.instance.getNodes());
			return nodes;
		}
		//根据TID获得 数据
		this.getNodeByT数据Id = function(tId){
			var node = this.instance.getNodeByTId(tId);
			return node;
		}
		//根据ID获得 数据
		this.getNodeById= function(id){
			return this.instance. treeObj.getNodeByParam("id", id,null);
		}
	}
