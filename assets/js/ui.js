// UI交互模块
const AdminUI = {
  // 模态框控制
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  // 下拉菜单控制
  toggleDropdown(dropdownEl) {
    const menu = dropdownEl.querySelector('.dropdown-menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  },

  // 表单校验
  validateForm(formEl) {
    let isValid = true;
    const requiredFields = formEl.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
      const formGroup = field.closest('.form-group');
      const errorEl = formGroup ? formGroup.querySelector('.form-error') : null;
      
      if (!field.value.trim()) {
        isValid = false;
        if (errorEl) {
          errorEl.style.display = 'block';
        }
        field.style.borderColor = 'var(--color-error)';
      } else {
        if (errorEl) {
          errorEl.style.display = 'none';
        }
        field.style.borderColor = '';
      }
    });
    
    return isValid;
  },

  // 表格筛选
  filterTable(tableId, keyword) {
    const table = document.getElementById(tableId);
    if (!table) return;
    
    const rows = table.querySelectorAll('tbody tr');
    keyword = keyword.toLowerCase();
    
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(keyword) ? '' : 'none';
    });
  },

  // 显示提示消息
  showMessage(message, type = 'info') {
    const msgEl = document.createElement('div');
    msgEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 6px;
      color: white;
      font-size: 14px;
      z-index: 9999;
      animation: slideIn 0.3s ease;
    `;
    
    switch (type) {
      case 'success':
        msgEl.style.backgroundColor = 'var(--color-success)';
        break;
      case 'error':
        msgEl.style.backgroundColor = 'var(--color-error)';
        break;
      case 'warning':
        msgEl.style.backgroundColor = 'var(--color-warning)';
        break;
      default:
        msgEl.style.backgroundColor = 'var(--color-primary)';
    }
    
    msgEl.textContent = message;
    document.body.appendChild(msgEl);
    
    setTimeout(() => {
      msgEl.style.opacity = '0';
      msgEl.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        if (document.body.contains(msgEl)) {
          document.body.removeChild(msgEl);
        }
      }, 300);
    }, 3000);
  },

  redirectAfterFeedback(message, path, type = 'success', delay = 700) {
    this.showMessage(message, type);
    window.setTimeout(() => {
      if (window.AdminCore) {
        window.AdminCore.routeTo(path);
      }
    }, delay);
  },

  // 初始化
  init() {
    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
          menu.classList.remove('active');
        });
      }
    });

    // 点击下拉触发
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleDropdown(dropdown);
      });
    });
  }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  AdminUI.init();
});

window.AdminUI = AdminUI;
window.openModal = (modalId) => AdminUI.openModal(modalId);
window.closeModal = (modalId) => AdminUI.closeModal(modalId);
