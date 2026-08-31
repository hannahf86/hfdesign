// The Jorvik Web Dev client portal database, as documented in the Claude Design
// project "Portal Schema Map". Twenty tables from the `public` schema of the
// portal's Supabase instance, transcribed from the schema dump.
//
// Shape is the design's own: { name, group, cols: [{ n, t, f }] } where `f` is
// a space-separated flag string drawn from `pk`, `req`, `uniq` and
// `fk:<target table>`. Everything the component shows — key tags, required
// markers, the link lines, the related-table highlighting — is derived from
// those flags, so this is the only place the schema is written down.
//
// Static by design. There is no connection to the live database from here, and
// there should not be: this is documentation of a shape, not a data source.

const c = (n, t, f) => ({ n, t, f: f || '' })

// Group hues and notes. The index on each table is the group it belongs to.
export const GROUPS = [
  { title: 'Clients & access', hue: '#2a9a9e', note: 'who logs in, and what they can see' },
  { title: 'Delivery', hue: '#4ca244', note: 'everything that hangs off a project' },
  { title: 'Money', hue: '#f7931e', note: 'invoicing' },
  { title: 'Admin & meta', hue: '#262626', note: 'internal, not client-facing' },
]

export const TABLES = [
  // ---- 0 · Clients & access ----
  {
    name: 'clients',
    group: 0,
    cols: [
      c('id', 'uuid', 'pk'),
      c('name', 'text', 'req'),
      c('email', 'text', 'uniq'),
      c('contact_name', 'text'),
      c('contact_phone', 'text'),
      c('company_url', 'text'),
      c('logo_url', 'text'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
      c('archived', 'bool', 'req'),
      c('drive_url', 'text'),
    ],
  },
  {
    name: 'portal_users',
    group: 0,
    cols: [
      c('user_id', 'uuid', 'pk fk:auth.users'),
      c('role', 'text', 'req'),
      c('client_id', 'uuid', 'fk:clients'),
      c('email', 'text'),
      c('invited_at', 'timestamptz'),
      c('created_at', 'timestamptz', 'req'),
    ],
  },
  {
    name: 'access_credentials',
    group: 0,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('type', 'text', 'req'),
      c('label', 'text', 'req'),
      c('value', 'text', 'req'),
      c('note', 'text'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },
  {
    name: 'change_requests',
    group: 0,
    cols: [
      c('id', 'uuid', 'pk'),
      c('client_id', 'uuid', 'req fk:clients'),
      c('project_id', 'uuid', 'fk:projects'),
      c('message', 'text', 'req'),
      c('status', 'text', 'req'),
      c('task_id', 'uuid', 'fk:my_tasks'),
      c('created_at', 'timestamptz', 'req'),
      c('handled_at', 'timestamptz'),
    ],
  },

  // ---- 1 · Delivery ----
  {
    name: 'projects',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('client_id', 'uuid', 'req fk:clients'),
      c('name', 'text', 'req'),
      c('description', 'text'),
      c('status', 'text', 'req'),
      c('current_phase', 'text', 'req'),
      c('start_date', 'date'),
      c('end_date', 'date'),
      c('budget', 'numeric'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
      c('type', 'text', 'req'),
      c('retainer_hours', 'numeric'),
      c('retainer_tier', 'text'),
    ],
  },
  {
    name: 'project_briefs',
    group: 1,
    cols: [
      c('project_id', 'uuid', 'pk fk:projects'),
      c('business_details', 'text'),
      c('years_in_business', 'text'),
      c('industry', 'text'),
      c('their_clients', 'text'),
      c('client_outcome', 'text'),
      c('website_goals', 'text'),
      c('kpis', 'text'),
      c('pages_needed', 'text'),
      c('current_platform', 'text'),
      c('target_platform', 'text'),
      c('target_platform_other', 'text'),
      c('dns_swap', 'bool', 'req'),
      c('has_branding', 'bool', 'req'),
      c('branding_by_us', 'bool', 'req'),
      c('features', 'text[]', 'req'),
      c('features_other', 'text'),
      c('created_at', 'timestamptz', 'req'),
      c('updated_at', 'timestamptz', 'req'),
    ],
  },
  {
    name: 'phases',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('name', 'text', 'uniq'),
      c('order_index', 'int', 'req'),
      c('description', 'text'),
      c('created_at', 'timestamptz'),
    ],
  },
  {
    name: 'milestones',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('phase_id', 'uuid', 'fk:phases'),
      c('name', 'text', 'req'),
      c('description', 'text'),
      c('due_date', 'date', 'req'),
      c('completed_date', 'date'),
      c('status', 'text', 'req'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },
  {
    name: 'tasks',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('title', 'text', 'req'),
      c('description', 'text'),
      c('due_date', 'date', 'req'),
      c('effort_level', 'text', 'req'),
      c('status', 'text', 'req'),
      c('assigned_to', 'text'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
      c('submitted_at', 'timestamptz'),
      c('completed_at', 'timestamptz'),
    ],
  },
  {
    name: 'task_comments',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('task_id', 'uuid', 'req fk:tasks'),
      c('author', 'text', 'req'),
      c('author_name', 'text'),
      c('body', 'text', 'req'),
      c('created_at', 'timestamptz', 'req'),
    ],
  },
  {
    name: 'approvals',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('item', 'text', 'req'),
      c('status', 'text', 'req'),
      c('requested_date', 'timestamptz'),
      c('due_date', 'date'),
      c('completed_date', 'timestamptz'),
      c('notes', 'text'),
      c('staging_url', 'text'),
      c('client_note', 'text'),
      c('responded_at', 'timestamptz'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },
  {
    name: 'meetings',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('title', 'text', 'req'),
      c('notes', 'text'),
      c('starts_at', 'timestamptz', 'req'),
      c('duration_mins', 'int', 'req'),
      c('location', 'text'),
      c('status', 'text', 'req'),
      c('client_note', 'text'),
      c('responded_at', 'timestamptz'),
      c('meeting_url', 'text'),
      c('created_at', 'timestamptz', 'req'),
      c('updated_at', 'timestamptz', 'req'),
    ],
  },
  {
    name: 'project_files',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('name', 'text', 'req'),
      c('file_url', 'text'),
      c('file_type', 'text'),
      c('file_size', 'int'),
      c('storage_path', 'text'),
      c('uploaded_by', 'text'),
      c('uploaded_date', 'timestamptz'),
      c('description', 'text'),
      c('milestone_id', 'uuid', 'fk:milestones'),
      c('approval_id', 'uuid', 'fk:approvals'),
      c('task_id', 'uuid', 'fk:tasks'),
      c('created_at', 'timestamptz'),
    ],
  },
  {
    name: 'handover_documents',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('document_url', 'text', 'req'),
      c('document_type', 'text', 'req'),
      c('generated_date', 'timestamptz'),
      c('version', 'int'),
      c('created_at', 'timestamptz'),
    ],
  },
  {
    name: 'time_entries',
    group: 1,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('entry_date', 'date', 'req'),
      c('hours', 'numeric', 'req'),
      c('notes', 'text'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },

  // ---- 2 · Money ----
  {
    name: 'invoices',
    group: 2,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'req fk:projects'),
      c('invoice_number', 'text', 'uniq'),
      c('amount', 'numeric', 'req'),
      c('status', 'text', 'req'),
      c('issue_date', 'date'),
      c('due_date', 'date'),
      c('paid_date', 'date'),
      c('notes', 'text'),
      c('reminder_sent_at', 'timestamptz'),
      c('reminder_count', 'int', 'req'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },
  {
    name: 'invoice_line_items',
    group: 2,
    cols: [
      c('id', 'uuid', 'pk'),
      c('invoice_id', 'uuid', 'req fk:invoices'),
      c('description', 'text', 'req'),
      c('quantity', 'numeric', 'req'),
      c('unit_price', 'numeric', 'req'),
      c('line_total', 'numeric', 'req'),
      c('sort_order', 'int', 'req'),
      c('created_at', 'timestamptz'),
    ],
  },

  // ---- 3 · Admin & meta ----
  {
    name: 'my_tasks',
    group: 3,
    cols: [
      c('id', 'uuid', 'pk'),
      c('title', 'text', 'req'),
      c('notes', 'text'),
      c('status', 'text', 'req'),
      c('effort', 'text', 'req'),
      c('due_date', 'date'),
      c('project_id', 'uuid', 'fk:projects'),
      c('client_id', 'uuid', 'fk:clients'),
      c('sort_order', 'int', 'req'),
      c('completed_at', 'timestamptz'),
      c('archived_at', 'timestamptz'),
      c('created_at', 'timestamptz'),
      c('updated_at', 'timestamptz'),
    ],
  },
  {
    name: 'activity_log',
    group: 3,
    cols: [
      c('id', 'uuid', 'pk'),
      c('project_id', 'uuid', 'fk:projects'),
      c('action', 'text', 'req'),
      c('description', 'text'),
      c('actor', 'text'),
      c('created_at', 'timestamptz'),
    ],
  },
  {
    name: 'business_settings',
    group: 3,
    cols: [
      c('id', 'uuid', 'pk'),
      c('business_name', 'text', 'req'),
      c('email', 'text'),
      c('phone', 'text'),
      c('website', 'text'),
      c('address', 'text'),
      c('vat_number', 'text'),
      c('company_number', 'text'),
      c('bank_name', 'text'),
      c('account_name', 'text'),
      c('account_number', 'text'),
      c('sort_code', 'text'),
      c('payment_terms', 'text'),
      c('invoice_footer', 'text'),
      c('logo_url', 'text'),
      c('calendly_url', 'text'),
      c('updated_at', 'timestamptz'),
    ],
  },
]

// Foreign-key targets declared on a table's columns.
export function fksOf(table) {
  const out = []
  table.cols.forEach((col) => {
    const m = /fk:([\w.]+)/.exec(col.f)
    if (m) out.push(m[1])
  })
  return out
}
