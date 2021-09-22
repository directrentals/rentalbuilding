"""empty message

Revision ID: d2ef73b50fa0
Revises: c5517be10695
Create Date: 2021-09-22 23:08:02.695965

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd2ef73b50fa0'
down_revision = 'c5517be10695'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('tenant_phone_key', 'tenant', type_='unique')
    op.drop_column('tenant', 'phone')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tenant', sa.Column('phone', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.create_unique_constraint('tenant_phone_key', 'tenant', ['phone'])
    # ### end Alembic commands ###
